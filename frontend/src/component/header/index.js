
import React, { useEffect, useState } from "react"
import "./style.css"
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Stack, Tab, Tabs, } from "@mui/material";
import { data } from "../../data";


const Header = (props) => {
  const [search, setSearch] = useState("");

  const navbarItems = [
    { label: "Home", path: "/" },
    { label: "Hindi", path: "/feed" },
    { label: "English", path: "/quiz" },
    { label: "Punjabi", path: "/contact" },
  ]
  const navigate = useNavigate();
  const path = useLocation();
  // console.log(path)
  const [value, setValue] = React.useState(path.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const navigateHandle = (path) => {
    navigate('/');
  }

  const [result, setResult] = useState([]);

  useEffect(() => {

    var temp = data.filter((e) => {

      if (search.toLowerCase() == e.song.slice(0, search.length).toLowerCase()) {
        return e
      }
    })
    if (search != "") {
      setResult(temp);
    } else {
      setResult([]);
    }
    console.log(result);

  }, [search])

  return (
    <header id="header">
      <div id="navbar">

        {/* this is the logo of the website  */}
        <a href="/" className="nav-item">
          <img id="logo" src="./logo.png" />
        </a>

        {/* this is search box */}
        <form className="nav-item" style={{ flex: 2 }}>
          <div className=" searchbar">

            <input  value={search} onChange={((e) => setSearch(e.target.value))} type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
            {search != "" &&

              <div className="active-search">
                {result.map((e) => {

                  return (

                    <div onClick={()=> {
                      props.setSong(e.path);
                      setSearch("");
                    }} className="searchbar-item" style={{ display: "flex", alignItems: "center", gap: "15px", padding: "5px 20px", borderBottom: "2px solid darkgrey" }}>
                      <img style={{ height: "40px", width: "40px", borderRadius: "10px" }} src={e.thumbnail} />
                      <div>{e.song}</div>
                    </div>
                  )
                })}
              </div>
            }

          </div>
        </form>

        {/* this is profile pic */}
        <div className="nav-item" style={{ paddingLeft: "20px" }} >
          <Stack direction="row" spacing={2}   >
            <Button variant="outlined" color="secondary" sx={{ borderRadius: "20px" }}>
              Sign In
            </Button>
            <Button variant="contained" color="secondary" sx={{ color: 'white', borderRadius: "20px" }}>
              Sign Out
            </Button>
            <a id="profile-pic" href="#" className="" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="42" height="42" className="rounded-circle" />
            </a>
          </Stack>

        </div>

      </div>
      <div className="below-nav">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {
            navbarItems.map((e) => {
              return <Tab sx={{ color: "#ffffff", width: "150px" }}
                key={e.path} onClick={() => navigateHandle(e.path)} value={e.path} label={e.label} />

            })
          }
        </Tabs>

      </div>
    </header>
  )
};

export default Header;
