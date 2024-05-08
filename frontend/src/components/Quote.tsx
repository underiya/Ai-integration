import axios from "axios";
import React, { useCallback, useState } from "react";
import { baseUrl } from "../App";

type formData = {
  topic: string;
  language: string;
};

const Quote: React.FC = () => {
  const [form, setfrom] = useState<formData>({
    topic: "",
    language: "",
  });
  const [quote, setStory] = useState<string>("");

  const fetchData = useCallback(async (prompt: string) => {
    try {
      const res = await axios.post(baseUrl, { prompt });
      setStory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { topic, language } = form;
    const prompt = `generate a meaningful quote with quote title as ${topic} in ${language} language ;
    it should also contain html language to style the page ,
    body should have bg-white and content should be a card with light grey background font should be 30px and bold
    `;
    fetchData(prompt);
  };

  return (
    <div>
      <h1>Quote</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TOPIC"
          onChange={(e) => setfrom({ ...form, topic: e.target.value })}
        />

        <select
          name="language"
          id=""
          onChange={(e) => setfrom({ ...form, language: e.target.value })}
        >
          <option value="">SELECT LANGUAGE</option>
          <option value="english">ENGLISH</option>
          <option value="hindi">HINDI</option>
        </select>
        <input type="submit" value="SUBMIT" />
      </form>
      <div id="page" dangerouslySetInnerHTML={{ __html: quote }} />
    </div>
  );
};

export default Quote;
