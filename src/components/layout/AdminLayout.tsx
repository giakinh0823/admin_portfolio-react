import { Box, Stack } from "@mui/material";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../../features/Blog/pages/index";
import DashBoard from "../../features/Dashboard/pages";
import Photo from "../../features/Photo/page";
import Topic from "../../features/Topic/pages/index";
import { Header } from "../common/Header";
import { NotFound } from "../common/NotFound";
import Sidebar from "../common/SlideBar";
import EditTopic from "../../features/Topic/pages/EditTopic";
import CreateTopic from "../../features/Topic/pages/CreateTopic";

export function AdminLayout() {
  const [showSlideBar, setShowSlideBar] = React.useState(true);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Box>
          <Sidebar showSlideBar={showSlideBar} onCloseShowSlide={() =>  setShowSlideBar(false)} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Header onChangeShowSlide={() =>  setShowSlideBar(!showSlideBar)} />
          </Box>
          <Box component="div" p={3} sx={{ width: "100%" }}>
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/topics" element={<Topic />} />
              <Route path="/topics/create" element={<CreateTopic />} />
              <Route path="/topics/:slug" element={<EditTopic />} />
              <Route path="/photos" element={<Photo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
