import axios from "axios";

export const initializeReduxState = async () => {
  try {
    console.log("intializing");
    const response = await axios.get(
      "http://localhost:27017/api/v1/problems/by-list/Top 75"
    );
    console.log("Complete");
    return response.data; // Assuming the server returns the problems data directly
  } catch (error) {
    console.error("Error fetching data:", error);
    return [{ empty: "empty" }]; // Return an empty array if there's an error
  }
};
export const filterDifficulty = (allQuestion, input) => {
  let currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    return question.difficulty === input;
  });

  return currentQuestion;
}
export const filterStatus = (allQuestion, input) => {
  let currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    return question.status === input;
  });

  return currentQuestion;
}
export const searchInputFilter = (allQuestion, input) => {
  let currentQuestion = [];
  currentQuestion = allQuestion.filter((question) => {
    const searchTitle = question.title.toLowerCase();
    const searchTerm = input.toLowerCase();
    return searchTitle.includes(searchTerm);
  });

  return currentQuestion;
};

export const filterByLists = (listName) => {
  return [];
};
export const filterProblemsByTags = (problems, tags) => {
  return problems.filter((problem) => {
    return tags.some((tag) => problem.tags.includes(tag));
  });
};
