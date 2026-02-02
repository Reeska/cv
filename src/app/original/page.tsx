// 'use client';

import Markdown from '@/components/Markdown';
import EmailIcon from '@/icons/EmailIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import GithubIcon from '@/icons/GithubIcon';
import WorkIcon from '@/icons/WorkIcon';
import SchoolIcon from '@/icons/SchoolIcon';
import React from 'react';
import ToolboxIcon from '@/icons/ToolboxIcon';
import ReactIcon from '@/icons/ReactIcon';
import VueIcon from '@/icons/VueIcon';
import TypeScriptIcon from '@/icons/TypeScriptIcon';
import VitestIcon from '@/icons/VitestIcon';
import GitlabIcon from '@/icons/GitlabIcon';
import TestingLibraryIcon from '@/icons/TestingLibraryIcon';
import SpeakerIcon from '@/icons/SpeakerIcon';
import { twJoin } from 'tailwind-merge';
import { getCurriculum, getTechnicalSkills } from "@/app/utils";


const Title = ({ className, ...props }: React.PropsWithChildren & { className?: string }) => (
  <h2 className={twJoin(
    'text-xl text-white',
    'bg-gradient-to-r from-primary to-secondary',
    'rounded py-3 px-4 flex items-center gap-3',
    className
  )} {...props} />
);

export default function Page() {
  const data = getCurriculum();
  const technicalSkills = getTechnicalSkills();

  return (
    <>
      <header
        className="bg-gradient-to-tr from-primary to-secondary p-6 flex flex-col gap-6 rounded print:rounded-none text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl uppercase font-bold">{data.name}</h1>
          <div className="flex gap-10 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/[format];base64,${data.profilePicture}`} className="w-48 rounded-xl h-48" alt=""/>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">{data.headline}</h2>
              <h3 className="text-xl mb-2">{data.city} &middot; {data.xp} années d&rsquo;expérience</h3>
              <p><EmailIcon className="text-xl mr-5 fill-white"/>thchampi@gmail.com</p>
              <p><PhoneIcon className="text-xl mr-5 fill-white"/>06.26.24.76.17</p>
              <p>
                <LinkedinIcon className="text-xl mr-5 fill-white"/>
                <a href={`https://${data.url}`} target="_blank">{data.url}</a>
              </p>
              <p>
                <GithubIcon className="text-xl mr-5 fill-white"/>
                <a href={`https://github.com/Reeska`} target="_blank">github.com/Reeska</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-6 mx-6">
        <div>
          <Markdown>{data.about}</Markdown>
        </div>
        <Title>
          <ToolboxIcon className="text-3xl stroke-white"/> Compétences techniques
        </Title>
        <div className="flex items-center">
          <Markdown>{technicalSkills}</Markdown>
          <div className="flex flex-wrap w-52 gap-4 mx-auto">
            <ReactIcon className="w-14 h-14"/>
            <VueIcon className="w-14 h-14"/>
            <TypeScriptIcon className="w-14 h-14"/>
            <VitestIcon className="w-14 h-14"/>
            <TestingLibraryIcon className="w-14 h-14"/>
            <GitlabIcon className="w-14 h-14"/>
          </div>
        </div>
        <Title>
          <SpeakerIcon className="text-3xl fill-white"/> Talks
        </Title>
        <ul>
          <li>Adopter les web components avec Stenciljs <strong>@ FrontSide 2020</strong></li>
          <li>Hand&apos;s on : Entrevue avec Vue.js <strong>@ Devoxx 2018</strong></li>
        </ul>
        <Title className="break-before-page">
          <WorkIcon className="text-3xl fill-white"/> Missions
        </Title>
        <main className="flex flex-col gap-8">
          {data.projects.map((project: any) => (
            <div key={project.dates}>
              <div
                className="border-b-4 border-solid border-primary p-3 mb-4 flex items-center gap-3 bg-[rgb(54_49_98_/_4%)] rounded-t">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-14"
                     src={project.companyPicture ? `data:image/[format];base64,${project.companyPicture}` : project.companyPictureUrl}
                     alt=""/>
                <div>
                  <p className="flex items-center gap-2 font-bold text-lg">
                        <span className="flex gap-5 items-center whitespace-nowrap">
                          {project.company}
                        </span>
                    &middot; <span>{project.title}</span>
                  </p>
                  <p>{project.dates} &middot; {project.duration}</p>
                </div>
              </div>
              <div>
                <Markdown>{project.description}</Markdown>
              </div>
            </div>
          ))}
        </main>
        <Title>
          <SchoolIcon className="text-3xl fill-white"/> Formations
        </Title>
        <main className="flex flex-col gap-8">
          {data.formations.map((formation: any) => (
            <div key={formation.dates} className="flex gap-3 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-14" src={`data:image/[format];base64,${formation.schoolPicture}`} alt=""/>
              <div>
                  <span className="flex flex-col">
                    <span className="font-bold">{formation.degreeInfos}</span>
                    {formation.school}
                  </span>
                <span>{formation.dates}</span>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
