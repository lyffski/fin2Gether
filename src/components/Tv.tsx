import React from "react";

interface MyComponentProps {
  data: {
    lists: any[];
    cards: any[];
  };
}

const liste = ["Datum", "Teilnahmer", "Direkter von", "bez.", "D.A.", "Einl.", "BSV1", "BSV2", "Alter", "Beruf", "Telf."];

const UploadPage: React.FC<MyComponentProps> = ({ data }) => {
  console.log("--",data);
    return (
    <div className='flex flex-col items-center'>
      {data.lists.map((list: any, index: number) => {
        if (!list.closed && list.name === "WV, Err, Term") {
            console.log("kk", list.name)
          return (
            <div key={index}>
              <div>{list.name}</div>
              <div>{list.id}</div>
              <br />
              {data.cards.map((card: any, cardIndex: number) => {
                if (list.name === "WV, Err, Term" && card.idList === list.id ) {
                  const descValues = card.desc.split(",");
                  return (
                    <div key={cardIndex}>
                      <div>Name: {card.name.split(",")[3]}</div>
                      <div>WV: {card.name.split(",")[0]}</div>
                      <div>Err: {card.name.split(",")[1]}</div>
                      <div>Term: {card.name.split(",")[2]}</div>
                      <div>Datum: {card.dateLastActivity.split("T")[0]}</div>
                      
                      {/* {descValues.map((value: string, descIndex: number) => (
                        <div key={descIndex}>{liste[descIndex]}: {value}</div>
                      ))} */}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default UploadPage;
