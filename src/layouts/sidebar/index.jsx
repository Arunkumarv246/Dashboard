import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import LOGO from "../../assets/Clogo.jpg"

import { IoIosArrowBack } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaElementor } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { ImVolumeHigh } from "react-icons/im";
import { FaRegCalendarDays } from "react-icons/fa6";
import { SiLiberapay } from "react-icons/si";
import { BsInfoCircleFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];


  const EmployeeList = [
    {
      name: "employees",
      icon: BsPeopleFill ,
      menus: [ "Departments","Designation","EmployeeList","Leaves","Loans and Advance","Overtime","Position","Schedule"]
    }
  ]


  const HRList =[
     {
        name:"payroll",
        icon:SiLiberapay ,
        menus:["Employee Salary"]
     },
     {
      name:"report",
      icon:FaChartPie ,
      menus:["Leaves","Payslip","Resignation","Termination","Users"]
     }

  ]

  const PerformanceList =[
    {
      name:"performance",
      icon:FaChartSimple,
      menus:["Resignation"]
    }
  ]

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-emerald-600 text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >  
 
              {/* head icons */}

        <div className="flex items-center gap-2 font-medium border-b py-3 border-slate-300  mx-2">
          <img
            //  src="https://img.icons8.com/color/512/firebase.png"
            src={LOGO}
            width={45}
            alt=""
          />
          {/* <img src={LOGO} alt=""/> */}
          <span className="text-lg whitespace-pre">HASH ENCHANTED</span>
        </div>
               {/* menu icon */}

         <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-500   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link">
                <RiDashboardFill size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>


            {(open || isTabletMid) && (
              <div className="border-y py-5 border-slate-300 ">
                <small className="pl-3 text-lime-950 inline-block mb-2">
                 Employee
                </small>
                 
              <li>
              <NavLink to={"/attendance"} className="link">
                <FaElementor  size={23} className="min-w-max" />
                Attendance
              </NavLink>
            </li>
                {EmployeeList?.map((menu) => (
                  
                  <div key={menu.name} className="flex flex-col gap-1">
        
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            
            {(open || isTabletMid) && (
              <div>
                <small className="pl-3 text-lime-950  inline-block mb-2">
                 HR
                </small>
                 
              
                {HRList?.map((menu) => (
                  
                  <div key={menu.name} className="flex flex-col gap-1">
        
                    <SubMenu data={menu} />
                  </div>
                ))}

             <li>
              <NavLink to={"/policies"} className="link">
                <BsInfoCircleFill size={23} className="min-w-max" />
                Policies
              </NavLink>
            </li>
              </div>
            )}
            
            {(open || isTabletMid) && (
              <div className="border-y py-5 border-slate-300 ">
                <small className="pl-3 text-lime-950  inline-block mb-2">
                 Performances
                </small>
                 
              
                {PerformanceList?.map((menu) => (
                  
                  <div key={menu.name} className="flex flex-col gap-1">
        
                    <SubMenu data={menu} />
                  </div>
                ))}

             <li>
              <NavLink to={"/promotion"} className="link">
                <ImVolumeHigh size={23} className="min-w-max" />
                Prmotion
              </NavLink>
            </li>
            <li>
              <NavLink to={"/calender"} className="link">
                <FaRegCalendarDays size={23} className="min-w-max" />
                Calender
              </NavLink>
            </li>
              </div>
            )}
            
            </ul>
       </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;