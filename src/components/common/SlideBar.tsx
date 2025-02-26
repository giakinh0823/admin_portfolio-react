import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import { Box } from "@mui/system";
import * as React from "react";
import { NavLink } from "react-router-dom";
import avatarImage from "../../assets/images/avatar.jpg";
import { ROUTER_LIST } from "./ROUTER_LIST";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
export interface SidebarProps {
  showSlideBar: boolean;
  onCloseShowSlide?: any;
}

const Sidebar = ({ showSlideBar, onCloseShowSlide }: SidebarProps) => {
  return (
    <Box>
      <Drawer
        open={showSlideBar}
        variant="persistent"
        onClose={() => onCloseShowSlide()}
        anchor="left"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          position: {
            md: "fixed",
            lg: "relative",
          },
          width: {
            md: undefined,
            lg: showSlideBar ? "250px" : 0,
          },
          flexShrink: 0,
          backgroundColor: "white",
          zIndex: (theme: any) => theme.zIndex.drawer + 2,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            zIndex: (theme: any) => theme.zIndex.drawer + 2,
            width: showSlideBar ? "250px" : 0,
            backgroundColor: "white",
            borderRight: "none",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          },
        }}
      >
        <Box sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Box sx={{ width: "100%"}}>
            <Box
              sx={{
                position: "absolute",
                right: "10px",
                top: "10px",
                cursor: "pointer",
                display: {
                  md: "block",
                  lg: "none",
                },
              }}
            >
              <CloseIcon
                sx={{ fontSize: "20px", color: "#000" }}
                onClick={onCloseShowSlide}
              />
            </Box>
            <Box
              sx={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                padding: "30px 20px",
                borderRadius: "30px",
                margin: "25px 30px 0 30px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  src={avatarImage}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  textAlign="center"
                  fontWeight="600"
                  mb={0}
                  mt={3}
                  sx={{
                    color: "#333",
                  }}
                >
                  Hà Gia Kính
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  textAlign="center"
                  fontSize="14px"
                  sx={{
                    color: "#333",
                    marginTop: "10px",
                  }}
                >
                  Code để thành công
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "40px 10px",
            }}
          >
            {ROUTER_LIST.map((item, index) => {
              return (
                <Box
                  key={index}
                  component="div"
                  sx={{
                    margin: "4px 0",
                    transition: "all 0.3s ease",
                  }}
                >
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        textDecoration: "none",
                        color: isActive ? "#3766f4" : "#333",
                        boxShadow: isActive
                          ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                          : undefined,
                        fontWeight: "bold",
                        backgroundColor: isActive
                          ? "rgb(55 102 244 / 10%)"
                          : undefined,
                        padding: "15px 50px",
                        borderRadius: "15px",
                        "&:hover": {
                          backgroundColor: "rgb(55 102 244 / 10%)",
                        },
                      };
                    }}
                    to={item.path}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        fontSize: "1.1rem",
                        alignItems: "center",
                      }}
                    >
                      <item.icon />
                      <Box component="span" sx={{ ml: 3 }}>
                        {item.name}
                      </Box>
                    </Box>
                  </NavLink>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Drawer>
      <Backdrop
        open={showSlideBar}
        sx={{
          color: "#fff",
          zIndex: (theme: any) => theme.zIndex.drawer + 1,
          display: { md: showSlideBar ? "block" : "none", lg: "none" },
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        onClick={onCloseShowSlide}
      />
    </Box>
  );
};

export default React.memo(Sidebar);
