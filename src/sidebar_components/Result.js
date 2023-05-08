const Result = ({ searchResults }) => {
  const results = searchResults.length;

  return <div className="Results">Results : {results}</div>;
};

export default Result;
