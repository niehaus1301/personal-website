import Chip from "@mui/joy/Chip";
import ReactSvg from "@/assets/react.svg?react";
import PythonSvg from "@/assets/python.svg?react";
import TypescriptSvg from "@/assets/typescript.svg?react";
import DialogflowCXSvg from "@/assets/dialogflowcx.svg?react"; // Assuming you have the SVGs
import FirebaseSvg from "@/assets/firebase.svg?react";
import PostgreSQLSvg from "@/assets/postgresql.svg?react";
import DockerSvg from "@/assets/docker.svg?react";
import TerraformSvg from "@/assets/terraform.svg?react";
import BashSvg from "@/assets/bash.svg?react";
import MongoDBSvg from "@/assets/mongodb.svg?react";
import GcpSvg from "@/assets/gcp.svg?react";
import NextjsSvg from "@/assets/nextjs.svg?react";
import SplineSvg from "@/assets/spline.svg?react";
import GAppsScriptSvg from "@/assets/gappsscript.svg?react";
import GitSvg from "@/assets/git.svg?react";
import GitLabSvg from "@/assets/gitlab.svg?react";
import JiraSvg from "@/assets/jira.svg?react";
import AWSSvg from "@/assets/aws.svg?react";
import KubernetesSvg from "@/assets/kubernetes.svg?react";
import FigmaSvg from "@/assets/figma.svg?react";

import { ColorPaletteProp } from "@mui/joy";

interface Props {
  svgIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  color: ColorPaletteProp;
}

export default function Skill({ svgIcon: SvgIcon, title, color }: Props) {
  return (
    <Chip
      color={color}
      variant="outlined"
      startDecorator={<SvgIcon width={20} height={20} />}
      size="lg"
    >
      {title}
    </Chip>
  );
}

export const ReactSkill = () => (
  <Skill svgIcon={ReactSvg} title="React.js" color="primary" />
);
export const PythonSkill = () => (
  <Skill svgIcon={PythonSvg} title="Python" color="warning" />
);
export const TypescriptSkill = () => (
  <Skill svgIcon={TypescriptSvg} title="TypeScript" color="primary" />
);
export const DialogflowCXSkill = () => (
  <Skill svgIcon={DialogflowCXSvg} title="Dialogflow CX" color="primary" />
);
export const FirebaseSkill = () => (
  <Skill svgIcon={FirebaseSvg} title="Firebase" color="warning" />
);
export const PostgreSQLSkill = () => (
  <Skill svgIcon={PostgreSQLSvg} title="PostgreSQL" color="primary" />
);
export const DockerSkill = () => (
  <Skill svgIcon={DockerSvg} title="Docker" color="primary" />
);
export const TerraformSkill = () => (
  <Skill svgIcon={TerraformSvg} title="Terraform" color="primary" />
);
export const BashSkill = () => (
  <Skill svgIcon={BashSvg} title="Bash" color="success" />
);
export const MongoDBSkill = () => (
  <Skill svgIcon={MongoDBSvg} title="MongoDB" color="success" />
);
export const GcpSkill = () => (
  <Skill svgIcon={GcpSvg} title="GCP" color="danger" />
);
export const NextjsSkill = () => (
  <Skill svgIcon={NextjsSvg} title="Next.js" color="neutral" />
);
export const SplineSkill = () => (
  <Skill svgIcon={SplineSvg} title="Spline" color="danger" />
);
export const GAppsScriptSkill = () => (
  <Skill svgIcon={GAppsScriptSvg} title="Google Apps Script" color="danger" />
);
export const GitSkill = () => (
  <Skill svgIcon={GitSvg} title="Git" color="danger" />
);
export const GitLabSkill = () => (
  <Skill svgIcon={GitLabSvg} title="GitLab CI/CD" color="danger" />
);
export const JiraSkill = () => (
  <Skill svgIcon={JiraSvg} title="Jira" color="primary" />
);
export const AWSSkill = () => (
  <Skill svgIcon={AWSSvg} title="AWS" color="warning" />
);
export const KubernetesSkill = () => (
  <Skill svgIcon={KubernetesSvg} title="Kubernetes" color="primary" />
);
export const FigmaSkill = () => (
  <Skill svgIcon={FigmaSvg} title="Figma" color="success" />
);
