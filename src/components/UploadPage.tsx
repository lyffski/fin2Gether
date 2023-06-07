import React from 'react';

interface MyComponentProps {
  data: any; // Adjust the type according to your JSON structure
}

const UploadPage: React.FC<MyComponentProps> = ({ data }) => {
  const lists = data.lists;
  const cards = data.cards;


  return (
    <div>
      
      


      {lists.map((list: any, index: number) => {
        if(!list.closed){
            return(
              <div key={index}>
                <div className="flex justify-center">{list.name}</div>
                <div>{list.id}</div>
                {cards.map((card: any, index: number) => {
                    if(card.idList === list.id){
                        return(
                            <div key={index}>
                            
                            <div>NAME: {card.name}</div>
                            <div>DESC: {card.desc}</div>
                            <div>AUTOR: {card.idMembers}</div>
                            <div>card.idList: {card.idList}</div>
                            <br/>
                            </div>
                        );
                    }
                },)}
                </div>
                
            );
      }
        })}
    </div>

)};

export default UploadPage;
