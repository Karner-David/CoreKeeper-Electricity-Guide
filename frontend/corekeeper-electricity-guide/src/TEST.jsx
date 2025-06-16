import { generateClient } from '@aws-amplify/api-graphql';
import { createItem } from '../../../backend/src/graphql/mutations';

export default function createNewItem() {
    const client = generateClient();

    async function submitNewItem() {
      const inputData = {
        name: "Electricity Generator",
        desc: "Generates electricity for your machines.",
        descLonger: "An Electricity Generator can generate electricity with a strength of 23 tiles. Often times this item is the go-to power source when the player wants to leave a machine constantly running.",
        img: "/item-thumbnails/generator.png",
        materials: ["10 Copper Bar"],
        materialImg: ["/item-thumbnails/copper_bar.webp"],
        station: "Electronics Table",
        stationImg: "/item-thumbnails/electronics_table.webp",
        howToUse: "Place down the generator and then at any of the sides, put either an electrical wire or a machine to conduct electricity or power a machine.",
        howToGif: "/how-tos/generatorWOWire.gif",
        exploreMoreItem: ["Electrical_Wire", "Lamp", "Robot_Arm"],
        exploreMoreContra: ["Electric_Clock", "Sorting_System"],
      };

      try {
        const { data } = await client.graphql({
          query: createItem,
          variables: { input }
          // authMode: 'apiKey' | 'amazon_cognito_user_pools' | etc.  (only if you need to override)
        });
        console.log('✅ created', data.createItem);
      } catch (err) {
        console.error('❌ createItem failed', err);
      }
    }
    return (
      <div>
        <button onClick={submitNewItem}>Upload Item</button>
      </div>
    )
}