import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import QuickEdit from "./Modal";
import { GiFleurDeLys } from "react-icons/gi";
import Sorting from "./Sorting";

const WordCard = (props) => {
  const navigate = useNavigate();

  const {
    wordEntry,
    urlEndPoint,
    setShouldRefresh,
    wordList,
    sortWordsDsc,
    sortWordsAsc,
  } = props;
  console.log(wordEntry);

  const handleDeleteWord = (id) => {
    setShouldRefresh(true);

    axios
      .delete(`${urlEndPoint}/words/delete-one/${id}`)

      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );
  };

  const [word, setWord] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState("");
  const [translation, setTranslation] = useState("");
  const [exampleSentence, setExampleSentence] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    setWord(wordEntry.word);
    setPartOfSpeech(wordEntry.partOfSpeech);
    setTranslation(wordEntry.translation);
    setExampleSentence(wordEntry.exampleSentence);
    setCreatedBy(wordEntry.createdBy);
    setComments(wordEntry.comments);
  }, [wordList]);

  const handleFavoriteWord = (id) => {
    setShouldRefresh(true);
    const req = {
      word: word,
      partOfSpeech: partOfSpeech,
      translation: translation,
      exampleSentence: exampleSentence,
      createdBy: createdBy,
      comments: comments,
    };

    axios
      .post(`${urlEndPoint}/favoritewords/create-one`, req) //${id}
      .then(
        function (response) {
          console.log(response);
          setShouldRefresh(false);
        },
        {
          "Content-Type": "application/json",
        }
      );

    navigate("/");
  };

  return (
    <div className="wordCard">
      {["Dark"].map((variant) => (
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card
                border="primary"
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "blue"}
                style={{ width: "27rem" }}
                className="mb-2"
              >
                <Card.Header style={{ color: "goldenrod" }}>
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                  <GiFleurDeLys />
                </Card.Header>
                <Card.Body>
                  <QuickEdit
                    wordEntry={wordEntry}
                    wordList={wordList}
                    setShouldRefresh={setShouldRefresh}
                    urlEndPoint={urlEndPoint}
                  />
                  <br />

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Part Of Speech:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.partOfSpeech} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Translation:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.translation} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Example Sentence:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.exampleSentence} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created By:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.createdBy} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Comments:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.comments} </small>{" "}
                  </Card.Text>
                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created On:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.createdAt} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Created By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.createdById} </small>{" "}
                  </Card.Text>

                  <Card.Subtitle style={{ fontSize: "25px", fontWeight: 1000 }}>
                    {" "}
                    Last Updated By Id:{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    {" "}
                    <small> {wordEntry.lastUpdatedById} </small>{" "}
                  </Card.Text>

                  <Card.Footer>
                    <Card.Subtitle
                      style={{ fontSize: "25px", fontWeight: 1000 }}
                    >
                      {" "}
                      Last Modified:{" "}
                    </Card.Subtitle>
                    <small className="text-muted">
                      <p>{wordEntry.lastModified}</p>{" "}
                    </small>
                  </Card.Footer>

                  <div className="d-grid gap-2">
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDeleteWord(wordEntry.createdById);
                      }}
                    >
                      Delete Word
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => {
                        handleFavoriteWord(wordEntry.createdById);
                        // navigate(`/edit-word/${wordEntry.createdById}`);
                      }}
                    >
                      Add To Favorite Words
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default WordCard;
