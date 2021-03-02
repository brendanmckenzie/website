import * as React from "react";
import { graphql } from "gatsby";

export const componentMap: { [type: string]: React.FunctionComponent } = {};

type Props = { modules: any[] };

const Module: React.FC<{ type: string; value: any }> = ({ type, value }) => {
  const component = componentMap[type];

  if (component) {
    return React.createElement<any>(componentMap[type], {
      value,
    });
  }

  console.warn(`Module type unknown: '${type}'`);

  return null;
};

export const ModuleList: React.FC<Props> = ({ modules }) => (
  <>
    {modules &&
      modules
        .filter((ent) => ent?.type)
        .map((ent, idx) => <Module key={idx} type={ent.type} value={ent} />)}
  </>
);

export const query = graphql`
  fragment Module_Fragment on Pok_Module {
    type
  }
`;
