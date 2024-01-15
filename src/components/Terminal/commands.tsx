import resume from "./resume.json";

const { basics, funfacts, languages } = resume;
const { name, email, phone, url, summary } = basics;

const linkedIn = resume.basics.profiles.find((e) => e.network === "LinkedIn");

// Funfact should feel random, but I want to avoid returning duplicates.
// That's why I just randomly select a starting funfact, and then cycle through.
let lastFunfactI = Math.floor(Math.random() * funfacts.length);

const availableCommands: { [command: string]: string } = {
  info: "Lists basic details, contact info and languages spoken",
  work: "List my experience",
  education: "List my education",
  funfact: "Returns a random fun fact about myself",
  doc: "Opens a file version of my resume in a new tab",
  code: "Opens the source code of this website in GitLab",
  exit: "Go back to my room",
  clear: "clears the console",
};

export default {
  help: (
    <span>
      <br />
      {Object.keys(availableCommands).map((command, i) => (
        <span key={i}>
          <strong>{command}</strong> - {availableCommands[command]}
          <br />
        </span>
      ))}
    </span>
  ),

  info: (
    <span>
      <br />
      <strong>Full name: </strong>
      {name}
      <br />
      <strong>E-Mail: </strong>
      <a href={"mailto:" + email} target="_blank">
        {email}
      </a>
      <br />
      <strong>Phone: </strong>
      <a href={"tel:" + phone} target="_blank">
        {phone}
      </a>
      <br />
      <strong>Website: </strong>
      <a href="#" onClick={() => window.alert("You are already here ;)")}>
        {url}
      </a>
      <br />
      <strong>LinkedIn: </strong>
      <a href={linkedIn?.url} target="_blank">
        {linkedIn?.username}
      </a>
      <br />
      <strong>Languages: </strong>
      {languages
        .map(({ language, fluency }) => `${language} (${fluency})`)
        .join(", ")}
      <br />
      <br />
      {summary}
      <br />
    </span>
  ),

  work: (option: string) => {
    if (option) {
      const selected = resume.work[Number(option)];

      if (selected) {
        const { name, position, startDate, endDate, highlights } = selected;

        return (
          <span>
            <br />
            <u>
              {name} | {position} | {startDate} - {endDate}
            </u>
            <br />
            <br />
            {highlights.map((highlight) => (
              <span>
                - {highlight}
                <br />
              </span>
            ))}
          </span>
        );
      } else return "Invalid option!";
    } else
      return (
        <span>
          <br />
          {resume.work.map(({ name, position, startDate, endDate }, i) => (
            <span key={i}>
              <strong>{`[${i}]`}</strong> <u>{name}</u> | {position} |{" "}
              {startDate} - {endDate}
              <br />
            </span>
          ))}
          <br />
          To view details about a particular experience enter: "
          <strong>work &lt;#&gt;</strong>"
          <br />
        </span>
      );
  },

  education: (option: string) => {
    if (option === "explain")
      return (
        <span>
          I was already working during high-school at CGI, where my boss asked
          me to look out for possibilities to digitize things in the office,
          which is how Door James has been founded {"("}type "
          <strong>work 1</strong>"{")"} for more info. <br />
          When I received my diploma and it was time to apply for university
          programmes, I already felt extremely connected to Door James and could
          hardly leave the rising product. Furthermore, I understood that
          leaving Door James would result in many lost learning and career
          oportunities.
          <br />
          Today I know this was the best choice I could have made :{")"}
        </span>
      );
    else if (option) {
      const selected = resume.education[Number(option)];

      if (selected) {
        const { institution, studyType, startDate, endDate, highlights } =
          selected;

        return (
          <span>
            <br />
            <u>
              {institution} | {studyType} | {startDate} - {endDate}
            </u>
            <br />
            <br />
            {highlights.map((highlight, i) => (
              <span key={i}>
                - {highlight}
                <br />
              </span>
            ))}
          </span>
        );
      } else return "Invalid option!";
    } else
      return (
        <span>
          <br />
          {resume.education.map(
            ({ institution, studyType, startDate, endDate }, i) => (
              <span key={i}>
                <strong>{`[${i}]`}</strong> <u>{institution}</u> | {studyType} |{" "}
                {startDate} - {endDate}
                <br />
              </span>
            )
          )}
          <br />
          Yes, I did not go to university. I am self taught. Curious why? Enter
          <strong> "education explain"</strong>
          <br />
          To view details about a particular education enter: "
          <strong>education &lt;#&gt;</strong>"
          <br />
        </span>
      );
  },

  skills: (
    <span>
      <br />
      {resume.skills.map((e) => e.name).join(", ")}
      <br />
    </span>
  ),

  funfact: () => {
    return funfacts[lastFunfactI++ % funfacts.length];
  },

  doc: () => {
    setTimeout(
      () =>
        window.open(
          "https://docs.google.com/document/d/1PrNXuOxpr_sHql20tGmEgSevfjy5RzVB3ACiyHLZOnQ/view",
          "_blank"
        ),
      1000
    );
    return "Opening my resume in a new tab...";
  },

  code: () => {
    setTimeout(
      () => window.open("https://gitlab.com/niehaus1301/resume-cli", "_blank"),
      1000
    );
    return "Opening source code in a new tab...";
  },
};
