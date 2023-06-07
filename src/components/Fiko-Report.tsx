import React from "react";

interface MyComponentProps {
  data: {
    lists: any[];
    cards: any[];
  };
}


const liste = ["Aufnahme", "Mitarbeiter", "Kunde", "Empf.", "mit Nr.", "Auswertung", "Strategiegespräch", "Ergebnis", "Polise", "Verprovisioniert"];


const UploadPage: React.FC<MyComponentProps> = ({ data }) => {
  return (
    <div className='flex flex-col items-center'>
      {data.lists.map((list: any, index: number) => {
        if (!list.closed && list.name === "Fiko - Report") {
          return (
            <div key={index}>
              <div>{list.name}</div>
              <div>{list.id}</div>
              <br />
              {data.cards.map((card: any, cardIndex: number) => {
                if (card.idList === list.id) {
                  const descValues = card.desc.split(";");
                  return (
                    <div key={cardIndex}>
                      <div>Kunde: {card.name.split(",")[0]}</div>
                      <div>Alter: {card.name.split(",")[1]}</div>
                      <div>Telf: {card.name.split(",")[2]}</div>
                      <div>von Wem: {card.name.split(",")[3]}</div>
                      {/* {descValues.map((value: string, descIndex: number) => (
                        <div key={descIndex}>DESC: {value}</div>
                      ))} */}

                      {data.cards.map((card: any, cardIndex: number) => {
                        if (card.idList === list.id) {
                          const descValues = card.desc.split("\n\n");
                          const a = card.desc.split("\n\n")[0];
                          console.log(a);
                          return (
                            <div key={cardIndex}>
                              <br/>

                              
                              {descValues.map(
                                (value: string, descIndex: number) => (
                                  <div key={descIndex}>
                                    {liste[descIndex]}: {card.desc.split("\n\n")[descIndex]}
                                  </div>
                                )
                              )}
                              {/* <div>AUTOR: {card.idMembers}</div>
                              <div>card.idList: {card.idList}</div> */}
                              <br />
                            </div>
                          );
                        } else {
                          return null;
                        }
                      })}

                      {/*   <div>AUTOR: {card.idMembers}</div> */}
                      <div>card.idList: {card.idList}</div>
                      <br />
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
