/* eslint-disable no-unused-vars */
import { generateClient } from "aws-amplify/api";
import { listItems, getItem } from "../../../../backend/src/graphql/queries";
import { createItem } from "../../../../backend/src/graphql/mutations";

const client = generateClient()

export async function fetchItems(filter = null) {
    const vars = filter ? { filter } : {}
    const apiKey = import.meta.env.API_KEY
    const { data } = await client.graphql({
        query: listItems,
        variables: vars,
        authMode: apiKey,
    }) 
    const items = data.listItems.items;
    items.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

    return items;
}

// export async function 