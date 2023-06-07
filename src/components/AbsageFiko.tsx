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
    <div className='flex flex-col items-center '>
      {data.lists.map((list: any, index: number) => {
        if (!list.closed && list.name === "Abgesagte Fikos") {
            console.log("kk", list.name)
          return (
            <div key={index}>
              <div>{list.name}</div>
              <div>{list.id}</div>
              <br />
              {data.cards.map((card: any, cardIndex: number) => {
                if (list.name === "Abgesagte Fikos" && card.idList === list.id ) {
                  const descValues = card.desc.split(",");
                  return (
                    <div key={cardIndex}>
                      <div>Kunde: {card.name.split(",")[0]}</div>
                      <div>Alter: {card.name.split(",")[1]}</div>
                      <div>Telf: {card.name.split(",")[2]}</div>
                      <div>von Wem: {card.name.split(",")[3]}</div>
                      <div>Datum: {card.dateLastActivity}</div>
                      
                      {descValues.map((value: string, descIndex: number) => (
                        <div key={descIndex}>{liste[descIndex]}: {value}</div>
                      ))}
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
