import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tech from "./Tech";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [tabPanelData, setTabPanelData] = useState([]);

  useEffect(() => {
    // Fetching the category data from category.json
    fetch("category.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));

    // Fetching the tab panel data from another JSON file or API
    fetch("topics.json")
      .then((res) => res.json())
      .then((data) => setTabPanelData(data));
  }, []);

  return (
    <div className="w-3/4 mx-auto border h-3/4">
      <h3 className="text-2xl font-bold mb-4">Category Page</h3>
      <Tabs>
        <TabList className="flex my-6">
          {categories.map((category) => (
            <Tab
              key={category.id}
              className="px-4 py-2 bg-red-200 rounded mr-2 cursor-pointer"
            >
              {category.name}
            </Tab>
          ))}
        </TabList>

        {tabPanelData.map((panelData) => (
          <TabPanel key={panelData.id}>
            <div>
              {panelData.topics.map((topic, index) => (
                <Tech key={index} topic={topic}></Tech>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Category;
