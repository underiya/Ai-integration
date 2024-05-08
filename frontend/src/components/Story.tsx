import axios from "axios";
import React, { useCallback, useState } from "react";
import { baseUrl } from "../App";

type formData = {
  topic: string;
  genre: string;
  language: string;
};

const Story: React.FC = () => {
  const [form, setfrom] = useState<formData>({
    topic: "",
    genre: "",
    language: "",
  });
  const [story, setStory] = useState<string>("");

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
    const { topic, genre, language } = form;
    const prompt = `generate a meaningful short story with story title on ${topic} , genre is ${genre} and translate to ${language} language ;
    it should also contain html language to style the page
    `;
    fetchData(prompt);
  };

  return (
    <div>
      <h1>Story</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TOPIC"
          onChange={(e) => setfrom({ ...form, topic: e.target.value })}
        />
        <input
          type="text"
          placeholder="GENRE"
          onChange={(e) => setfrom({ ...form, genre: e.target.value })}
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
      <div id="page" dangerouslySetInnerHTML={{ __html: story }} />
    </div>
  );
};

export default Story;
