import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col mx-3">
        <Workflow
          name="Google Drive"
          description="Sync your Google Drive files to Notion"
          id="sdsddcdsc4654sx646c1"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
