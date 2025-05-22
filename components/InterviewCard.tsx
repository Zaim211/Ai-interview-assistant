import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { cn, getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";


const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {

  const feedback = null as Feedback | null;
  const normalizdType = /mix/gi.test(type) ? "Mixed" : type;
  const formttedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMMM D, YYYY");

  return (
    <div className="card-border w-[300px] max-sm:w-full min-h-96">
        <div className="card-interview">
            <div>
                <div className="absolute top-0 right-0 w-fit py-2 px-4 rounded-bl-lg bg-light-400">
                    <p className='badge-text'>{normalizdType}</p>
                </div>
                <Image 
                    src={getRandomInterviewCover()}
                    alt="interview cover"
                    width={90}
                    height={90}
                    className="rounded-full object-fit size-[90px]"
                />
                <h3 className="capitalize mt-5">{role} Interview</h3>
                <div className="flex flex-row gap-5 mt-3">
                <div className="flex flex-row gap-2">
                    <Image src="/calendar.svg" alt="calendar" width={20} height={20} />
                    <p>
                        {formttedDate}
                    </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Image src="/star.svg" alt="star" width={20} height={20} />
                    <p>
                        {feedback?.totalScore || "---"} / 100
                    </p>
                </div>
                </div>
                <p className="line-clamp-2 mt-5">
                    {feedback?.finalAssessment || "You haven't taken any interviews yet. Take it now to improve your skills."}
                </p>
            </div>
            <div className="flex flex-row justify-between">
                <DisplayTechIcons techStack={techstack} />
                <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
            </div>
        </div>
    </div>
  );
};

export default InterviewCard;
