import React from "react";
import questions from "./Faq.json";
import Banner from "./Banner";
export default function App() {
  return (
    <Banner>
      <Banner.Header>Questions and Answers</Banner.Header>
      {questions.map((question) => (
        <Banner.Entity key={question.id}>
          <Banner.Question>{question.question}</Banner.Question>
          <Banner.Text>{question.answers}</Banner.Text>
        </Banner.Entity>
      ))}
      <h4>
        Question not on the list? Contact out help desk for further enquiries
      </h4>
    </Banner>
  );
}