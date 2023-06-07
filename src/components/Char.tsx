import React, { useEffect, useState } from "react";

interface MyComponentProps {
  data: {
    lists: any[];
    cards: any[];
  };
}

interface CharData {
  [key: string]: string;
}

const MA = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
];

const liste = [
  "Datum",
  "Teilnahmer",
  "Direkter von",
  "bez.",
  "D.A.",
  "Einl.",
  "BSV1",
  "BSV2",
  "Alter",
  "Beruf",
  "Telf.",
];

const UploadPage: React.FC<MyComponentProps> = ({ data }) => {
  const char: CharData = {
    "6479dadb911e0ec632c9e67b": "Kacper Sobczak",
    "647a03f10b092aa1ddf7ff9e": "Casper Kasprzak",
    yetAnotherKey: "yetAnotherValue",
  };

  /* const charMemberID = [
    "6479dadb911e0ec632c9e67b",
    "6479dadb911e0ec632c9e67b",
    "647a03f10b092aa1ddf7ff9e",
    "yetAnotherKey",
    // Add more values here
  ]; */

  const charMemberID = [
    "Placeholder",
    "Kevin Schmid",
    "Gulia",
    "Kacper"
  ]

  const MAList = [
    "Placeholder",
    "Kevin Schmid",
    "Gulia",
    "Kacper"
    // Add more values here
  ];

  const charList = Object.assign(
    {},
    ...MA.map((index) => ({
      [index]: charMemberID[index],
    }))
  );

  

  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const a = Number
  console.log(charList);

  console.log("k,", data.cards);
  console.log("n,", data.cards[0]);
  return (
    <div className='flex flex-col items-center'>
      <div>
        <select
          value={selectedNumber || ""}
          onChange={(e) => setSelectedNumber(Number(e.target.value) || null)}
        >
          <option value="">Select a number</option>
          {MA.map((number) => (
            <option key={number} value={number}>
              {MAList[number]}
            </option>
          ))}
        </select>
      </div>
      {data.lists.map((list: any, index: number) => {
        if (!list.closed) {
            console.log(list)
            return (
                <div key={index}>
              <div className="ml-10"></div>
              {data.cards.map((card: any, cardIndex: number) => {
                
                console.log("A", card.name.split(",")[3]);
                console.log("B", charMemberID[index]);
                /* console.log("B", MAList[cardIndex]);
                console.log("A", charList[cardIndex]); */
                if (
                  card.idList === list.id 
                  //@ts-ignore
                  && (charList[selectedNumber] == card.idMebemers)
                ) { 
                  const descValues = card.desc.split(",");
                  return (
                    <div key={cardIndex}>
                        <div className="ml-10">{list.name}</div>

                      {card.idList === "648032cc06723ca2f756f187" && (
                        <div>
           
                        <div>{card.name}</div>
                        </div>
                      )}  
                      {card.idList === "648032db5f75f2e12e26ca78" && (
                        <div>
                
                        <div>{card.name}</div>
                        </div>
                      )}
                      {card.idList === "648032e21eca2311ac501fe4" && (
                        <div>
               
                        <div>{card.name}</div>
                        </div>
                      )}
                      {card.idList === "648032e821ae200053f1e3e7" && (
                        <div>
                      
                        <div>{card.name}</div>
                        </div>
                      )}
                      {card.idList === "648032ef9fd05d577de8cada" && (
                        <div>
                     
                        <div>{card.name}</div>
                        </div>
                      )}
                      {card.idList === "648032faf9e4692ef06e9a74" && (
                       <div>
                   
                       <div>{card.name}</div>
                       </div>
                      )}
                      {card.idList === "648032fcbe82a62d50b27e1a" && (
                        <div>
                      
                        <div>{card.name}</div>
                        </div>
                      )}
                      {card.idList === "648032fe1737f41e507e5119" && (
                        <div>
                       
                        <div>{card.name}</div>
                        </div>
                      )}
                      {card.idList === "6480330fd967dd13a639c57b" && (
                        <div>
                        <div>{card.name}</div>
                        </div>
                      )}
                    
                      <div></div>
                      {/* {descValues.map((value: string, descIndex: number) => (
                        <div key={descIndex}>{liste[descIndex]}: {value}</div>
                      ))} */}
                      {/* <div>AUTOR: {card.idMembers}</div>
                      <div>card.idList: {card.idList}</div> */}
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
