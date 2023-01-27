import { faLink, faDollar, faDesktop } from "@fortawesome/free-solid-svg-icons";

import Card from "../../atoms/Card";
import PersonImage from "../../molecules/PersonImage";
import CardSummary from "../../molecules/CardSummary";
import CardHeader from "../../molecules/CardHeader";
import Button from "../../molecules/Button";
import Quote from "../../molecules/Quote";
import SubQuote from "../../molecules/SubQuote";

export default function Profile () {
  return (
      <div className="h-screen flex flex-col pt-24 justify-center items-center gap-4 lg:px-4 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-4 px-4 lg:px-0">
          <Quote>
            <span className="text-main">Share</span> your passion with the world 
          </Quote>
          <SubQuote>Share your knowledge, experience and earn extra money. Create your personal account in less than 3 minutes</SubQuote>
          <Button className="text-lg w-max">start teaching</Button>
        </div>
        
        <div className="w-screen lg:w-[55%] relative flex justify-center lg:justify-start">
          <PersonImage />
          <Card className="absolute left-0 bottom-[10%] p-2">
            <CardHeader icon={ faLink }>
              great project
             </CardHeader>
            <CardSummary>5,1K connection</CardSummary>
          </Card>
          
          <Card className="absolute top-[40%] right-[5%] p-2">
            <CardHeader icon={ faDollar }>
              accountant manager
             </CardHeader>
          </Card>
          
          <Card className="absolute top-[60%] lg:top-[50%] right-[5%] p-2">
            <CardHeader icon={ faDesktop }>
              software engineer
            </CardHeader>
          </Card>
        </div>
      </div>
    )
}