import * as React from "react";
import { Layout } from "../components/layout";
import { HomeIntro } from "../components/homeIntro";
import { LinkCard } from "../components/linkCard";
import { LinkCardWrapper } from "../components/linkCardWrapper";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <HomeIntro />
        <LinkCardWrapper>
          <LinkCard
            image={`https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4016&q=80`}
            text={`Parties`}
            link={`/pizza-parties`}
          />
          <LinkCard
            image={`https://images.unsplash.com/photo-1609103254482-dc7beedc47bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3815&q=80`}
            text={`Weddings`}
            link={`/pizza-weddings`}
          />
          <LinkCard
            image={`https://images.unsplash.com/photo-1576792296785-8040d54d2048?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80`}
            text={`Birthdays`}
            link={`/pizza-birthdays`}
          />
        </LinkCardWrapper>
      </Layout>
    </main>
  )
};

export default IndexPage;
