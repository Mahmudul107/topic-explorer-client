import React from "react";

const Tech = ({ topic }) => {
  const deleteTopic = (categoryId, topicId) => {
    // Implement your delete topic logic here
    // Update the state accordingly
    console.log("Deleting topic", categoryId, topicId);
  };

  const keywordColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
  ];

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg ">
      <div className="font-bold mb-2">{topic.title}</div>
      <div className="flex items-center justify-between">
        <ul className="ml-2">
          {topic.keywords.map((keyword, index) => (
            <li
              key={index}
              className={`inline-block text-white rounded-full px-2 py-1 text-sm mr-1 ${
                keywordColors[index % keywordColors.length]
              }`}
            >
              {keyword}
            </li>
          ))}
        </ul>
        <div>
          <button
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => deleteTopic(topic.categoryId, topic.id)}
          >
            {/* TODO: Add FaIcon */}
            Delete Topic
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tech;
