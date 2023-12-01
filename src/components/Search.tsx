import styled from "styled-components";

const StyledSearchContainer = styled.section`
  width: 90%;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem;
  border: 1px solid #242424;
  border-radius: 0.25rem;
`;

const StyledSearchBar = styled.input`
  width: 30%;
  padding: 15px;
  border-radius: 0.25rem;
  border: 1px solid #242424;
  font-size: 1rem;

  &:focus {
    border: none;
    outline: 1.5px solid #1992bb;
  }

  @media screen and (max-width: 720px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;
const StyledSearchButton = styled.button`
  width: 30%;
  background-color: #1992bb;
  border: 5px solid #157595;
  border-radius: 0.25rem;
  padding: 0.5rem 0;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: #157595;
    border: 5px solid #1992bb;
  }

  @media screen and (max-width: 720px) {
    width: 40%;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
  }
`;

const SearchBars = () => {
  const searchTypeArr = ["name", "birth", "father", "mother", "owner"];
  const searchArr = [];
  for (let x = 0; x < 5; x++) {
    searchArr.push(
      <StyledSearchBar
        type="text"
        key={x}
        placeholder={searchTypeArr[x]}
        id={searchTypeArr[x]}
        name={searchTypeArr[x]}
      />
    );
  }
  return searchArr;
};

const Search = () => {
  return (
    <StyledSearchContainer>
      <SearchBars />
      <StyledSearchButton>Search</StyledSearchButton>
    </StyledSearchContainer>
  );
};

export default Search;
