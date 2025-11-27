"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Dropdown, DropdownItem } from '@/components/ui/DropDown';
import { ChevronDown, Search, User, Briefcase, Globe, MapPin, Users as UsersIcon, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FindPeopleSidebar() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [jobTitle, setJobTitle] = useState('E.g: Manager, Software Engineer');
  const [companyWebsite, setCompanyWebsite] = useState('E.g: Google.com, Linkedin.com');
  const [personLocation, setPersonLocation] = useState('E.g: London, Great New York City');
  const [companyLocation, setCompanyLocation] = useState('E.g: United States, UAE');
  const [companyHeadcount, setCompanyHeadcount] = useState('E.g: 11-50, 10000+');
  const [managementLevel, setManagementLevel] = useState('E.g: Owner, Founder');

  return (
    <div
      className="bg-white rounded-lg flex flex-col justify-between overflow-y-auto"
      style={{
        width: "319px",
        height: "668px",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.1)"
      }}
    >
      {/* TOP CONTENT */}
      <div>
        {/* HEADER */}
        <div className="flex items-center justify-between h-[73px] border-b border-gray-200 px-4">
          <h2 className="text-lg font-semibold text-[#111928]">Find People</h2>
  
          <div className="flex items-center text-sm text-[#111928]">
            Saved Search
            <ChevronDown className="ml-1 h-4 w-4 text-[#111928]" />
          </div>
        </div>
  
        {/* FILTER SECTIONS */}
        <div className="space-y-6 px-4 py-4">
  
          {/* People Keyword */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <User className="h-4 w-4 mr-2" /> People Keyword
            </label>

            <Input
              type="text"
              placeholder="Enter single keyword here..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="
                !bg-white 
                !text-black 
                !placeholder-gray-400 
                !border-transparent
                !shadow-none 
                !ring-0 
                !outline-none
                h-[38px]
                pl-10
              "
              icon={<Search className="h-4 w-4 text-gray-400" />}
            />
          </div>



  
          {/* Job Title */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Briefcase className="h-4 w-4 mr-2" /> Job Title
            </label>
            <p className="text-sm text-gray-900">E.g: Manager, Software Engineer</p>
          </div>
  
          {/* Company Website */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Globe className="h-4 w-4 mr-2" /> Company Website
            </label>
            <p className="text-sm text-gray-900">E.g: Google.com, Linkedin.com</p>
          </div>
  
          {/* Person Location */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <MapPin className="h-4 w-4 mr-2" /> Person Location
            </label>
            <p className="text-sm text-gray-900">E.g: London, New York City</p>
          </div>
  
          {/* Company Location */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <MapPin className="h-4 w-4 mr-2" /> Company Location
            </label>
            <p className="text-sm text-gray-900">E.g: United States, UAE</p>
          </div>
  
          {/* Company Headcount */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <UsersIcon className="h-4 w-4 mr-2" /> Company Headcount
            </label>
            <p className="text-sm text-gray-900">E.g: 11-50, 10000+</p>
          </div>
  
          {/* Management Level */}
          <div className="space-y-1">
            <label className="flex items-center text-sm font-medium text-gray-700">
              <Award className="h-4 w-4 mr-2" /> Management Level
            </label>
            <p className="text-sm text-gray-900">E.g: Owner, Founder</p>
          </div>
  
        </div>
      </div>
  
      {/* FOOTER BUTTONS */}
      <div className="flex justify-between items-center px-4 py-4 border-t border-gray-200">
        <Button
          className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Save Search
        </Button>
  
        <Button
          variant="default"
          className="!bg-black !text-white hover:!bg-gray-800 flex items-center gap-2"
        >
          Preview Result
        </Button>
      </div>
    </div>
  );  
}
