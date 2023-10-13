import resume from "./resume.json";
import calculateAge from "../../utils/calulcateAge";

const { name, email, phone, url } = resume.basics;

const linkedIn = resume.basics.profiles.find((e) => e.network === "LinkedIn");

const yearsOld = calculateAge(new Date("2001-07-13"));

export default {
  help: (
    <span>
      <br />
      Welcome to resume-cli version {yearsOld}-sinceborn developed by
      @niehaus1301. <br />
      To get started, enter one of the following commands and press enter:
      <br />
      <br />
      <strong>info</strong> - Lists basic details about myself
      <br />
      <strong>work</strong> - List my experience
      <br />
      <strong>work &lt;#&gt;</strong> - Show details about a particular
      experience
      <br />
      <strong>funfact</strong> - Returns a random fun fact about myself
      <br />
      <strong>doc</strong> - Opens a file version of my resume in a new tab
      <br />
      <strong>clear</strong> - clears the console <br />
      <br />
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
    </span>
  ),

  work: (selected: string) => {
    if (selected) {
      const selectedWork = resume.work[Number(selected)];

      if (selectedWork) {
        const { name, position, startDate, endDate, highlights } = selectedWork;

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
            <span>
              <strong>{`[${i}]`}</strong> <u>{name}</u> | {position} |{" "}
              {startDate} - {endDate}
            </span>
          ))}
          <br />
          <br />
          To view details about a particular experience enter: "
          <strong>work &lt;#&gt;</strong>"
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
};
