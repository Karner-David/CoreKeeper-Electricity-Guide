/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      desc
      descLonger
      img
      materials
      materialImg
      station
      stationImg
      howToUse
      howToGif
      exploreMoreItem
      exploreMoreContra
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      desc
      descLonger
      img
      materials
      materialImg
      station
      stationImg
      howToUse
      howToGif
      exploreMoreItem
      exploreMoreContra
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      desc
      descLonger
      img
      materials
      materialImg
      station
      stationImg
      howToUse
      howToGif
      exploreMoreItem
      exploreMoreContra
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContrapItem = /* GraphQL */ `
  mutation CreateContrapItem(
    $input: CreateContrapItemInput!
    $condition: ModelContrapItemConditionInput
  ) {
    createContrapItem(input: $input, condition: $condition) {
      id
      contrapName
      materials
      p1
      gif1
      p2
      gif2
      p3
      gif3
      p4
      gif4
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContrapItem = /* GraphQL */ `
  mutation UpdateContrapItem(
    $input: UpdateContrapItemInput!
    $condition: ModelContrapItemConditionInput
  ) {
    updateContrapItem(input: $input, condition: $condition) {
      id
      contrapName
      materials
      p1
      gif1
      p2
      gif2
      p3
      gif3
      p4
      gif4
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContrapItem = /* GraphQL */ `
  mutation DeleteContrapItem(
    $input: DeleteContrapItemInput!
    $condition: ModelContrapItemConditionInput
  ) {
    deleteContrapItem(input: $input, condition: $condition) {
      id
      contrapName
      materials
      p1
      gif1
      p2
      gif2
      p3
      gif3
      p4
      gif4
      createdAt
      updatedAt
      __typename
    }
  }
`;
