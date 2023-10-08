import Image from "next/image"
import { RowContentProps } from "@/types"
import RowHeader from "./RowHeader"
import RowGroup from './RowGroup'


const rightContent: RowContentProps[] = [
  {
    title: "CONNECTION",
    description: "Connect with coaches directly, you can ping coaches to view profile.",
    bulletText: "01",
    bgColor: "md:bg-white bg-primary-gray",
    contentContainerStyle: "lg:pl-[131px] lg:pb-[56px] lg:mr-[30px] md:pl-[291px] md:pb-[30px] md:mr-[30px] md:pt-0 pl-[18px] pr-[18px] pt-[72px]"
  },
  {
    title: "COLLABORATION",
    description: "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    bulletText: "02",
    bgColor: "bg-primary-gray",
    contentContainerStyle: "lg:pl-[131px] lg:pt-[53px] lg:pb-[56px] lg:mr-[30px] md:pl-[291px] md:pt-[30px] md:pb-[58px] md:mr-[30px] pl-[18px] pr-[18px] pt-[72px]"
  },
  {
    title: "GROWTH",
    description: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    bulletText: "03",
    bgColor: "md:bg-primary-purple bg-primary-gray",
    contentContainerStyle: "lg:pl-[131px] lg:pt-[80px] lg:pb-[98px] lg:mr-[30px] md:pl-[291px] md:pt-[21px] md:pb-[58px] md:mr-[30px] pl-[18px] pr-[18px] pt-[72px]",
    textDescriptionStyle: "md:text-white leading-[28px]",
    bulletTitleStyle: "md:bg-white"
  }
]

const leftContent: RowContentProps[] = [
  {
    reverse: true,
    title: "CONNECTION",
    description: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    bulletText: "01",
    bgColor: "md:bg-white bg-primary-gray",
    textDescriptionStyle: "md:leading-[28px] lg:max-w-[571px] md:max-w-[432px]",
    contentContainerStyle: "lg:pl-[321px] lg:pb-[69px] md:pl-[33px] md:pb-[10px] md:pt-0 pl-[18px] pr-[18px] pt-[72px] custom__desktop-left-content"
  },
  {
    reverse: true,
    title: "COLLABORATION",
    description: "Work with recruiter to increase your chances of finding talented athlete.",
    bulletText: "02",
    bgColor: "bg-primary-gray",
    textDescriptionStyle: "md:leading-[28px] lg:w-[717px] md:w-[432px]",
    contentContainerStyle: "lg:pl-[322px] lg:pb-[102px] lg:pt-[52px] md:pl-[33px] md:pb-[65px] md:pt-[51px] pl-[18px] pr-[18px] pt-[72px] custom__desktop-left-content"
  },
  {
    reverse: true,
    title: "GROWTH",
    description: "Save your time, recruit proper athlets for your team.",
    bulletText: "03",
    bgColor: "md:bg-primary-blue bg-primary-gray",
    contentContainerStyle: "lg:pl-[323px] lg:pb-[62px] lg:pt-[93px] md:pl-[33px] md:pb-[72px] md:pt-[44px] pl-[18px] pr-[18px] pt-[72px] custom__desktop-left-content",
    textDescriptionStyle: "md:text-white leading-[28px] lg:w-[717px] md:w-[455px]",
    bulletTitleStyle: "md:bg-white",
    textBulletStyle: "text-[#8765DD]"
  }
]

const SportContent = () => {
  return (
    <div>
      <div className="right_content">
        <div className="image__right_content_container">
          <div className="image__right_content_desktop">
            <Image
              src="/desktop_footballer.svg"
              alt="desktop footballer"
              layout='fill'
              className="object-contain"
            />
          </div>
          <div className="image__right_content_tablet">
            <Image
              src="/tablet_footballer.svg"
              alt="tablet footballer"
              className="shrink-0 z-10 object-contain"
              layout='fill'
            />
          </div>
          <div className="image__right_content_mobile">
            <Image
              src="/mobile_footballer.svg"
              alt="mobile footballer"
              className="shrink-0 z-10 object-contain"
              layout='fill'
            />
          </div>
        </div>
        <RowHeader
          header="ATHLETS"
          contentContainerStyle="lg:pl-[131px] lg:pb-[59px] lg:mr-[30px] md:pl-[291px] md:pb-[42px] md:mr-[30px] pl-[18px] pr-[18px] pb-[237px]"
          headerContainerStyle="lg:pt-[24px] md:pt-[81px] md:min-w-[457px]"
        />
        <RowGroup rows={rightContent} />
      </div>
      <div className="left_content">
        <div className="image__left_content_container">
          <div className="image__left_content_desktop">
            <Image
              src="/desktop_basketballer.svg"
              alt="desktop basketballer"
              layout='fill'
              className="object-contain"
            />
          </div>
          <div className="image__left_content_tablet">
            <Image
              src="/tablet_basketballer.svg"
              alt="tablet basketballer"
              layout='fill'
              className="object-contain"
            />
          </div>
          <div className="image__left_content_mobile">
            <Image
              src="/mobile_basketballer.svg"
              alt="mobile footballer"
              className="shrink-0 z-10 object-contain"
              layout='fill'
            />
          </div>
        </div>
        <RowHeader
          header="PLAYERS"
          reverse
          contentContainerStyle="lg:pl-[321px] lg:pb-[68px] lg:pt-[124px] md:pl-[31px] md:pb-[32px] md:pt-[51px] pl-[19px] pb-[237px] pt-[19px] custom__desktop-left-content"
        />
        <RowGroup rows={leftContent} />
      </div>
    </div>
  )
}

export default SportContent