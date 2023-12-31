import CommunityCard from "../react/componentes/feed/body/recommendations/children/communityCard";
async function RecommendationsHandler() {
        
        let response = (await getRecommendations()).data;
       
        console.log(response);
        let communityArr=[];
        
        for(let i=0;i<1;i++){
            communityArr.push(
                
                <CommunityCard communityName={response[i].communityName} communityImage={response[i].communityImage.length>0?response[i].communityImage:null} />

                    
                
            )
        }

       
        

      }
   