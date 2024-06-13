import { CONNECTIONS } from "@/lib/constant";
import React from "react";
import ConnectionCard from "./_components/connectionsCard";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

const Connections = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4 ">
        <section className="p-6 text-muted-foreground flex flex-col gap-4">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification.
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              title={connection.title}
              description={connection.description}
              icon={connection.image}
              type={connection.title}
              //   connected={connections}
              key={connection.title}
            ></ConnectionCard>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
