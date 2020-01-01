import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import NameCard from "./NameCard";

const App = () => {
  return (
    <>
      <div className="ui internally celled grid">
        <div className="ui center aligned icon header container">
          <i className="circular recycle icon"></i>
          <h2>Reusable React Components</h2>
          <div>And Dummy Data with Faker Js</div>
          reload to see dummy dummy data effect
        </div>
        <div className="ui comments">
          <ApprovalCard>
            <h1>This is static content</h1>
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              avatar={Faker.image.avatar()}
              author={Faker.internet.userName()}
              time="Today, 10:10 AM"
              comment={Faker.internet.userName()}
            />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail
              avatar={Faker.image.avatar()}
              author={Faker.internet.userName()}
              time="Jam sepuluh"
              comment={Faker.internet.userName()}
            />
          </ApprovalCard>
        </div>
        <div className="ui comments">
          <NameCard
            name={Faker.name.firstName()}
            image={Faker.image.image()}
            desc={Faker.lorem.words()}
          >
            <CommentDetail
              avatar={Faker.image.avatar()}
              author={Faker.internet.userName()}
              time="Today, 10:10 AM"
              comment={Faker.internet.userName()}
            />
          </NameCard>
          <NameCard
            name={Faker.name.firstName()}
            image={Faker.image.image()}
            desc={Faker.lorem.words()}
          >
            <CommentDetail
              avatar={Faker.image.avatar()}
              author={Faker.internet.userName()}
              time="Today, 10:10 AM"
              comment={Faker.internet.userName()}
            />
          </NameCard>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
