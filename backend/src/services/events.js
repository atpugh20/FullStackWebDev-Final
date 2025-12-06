import { v4 as uuidv4 } from "uuid";
import { Event } from "../db/models/event.js";
export async function trackEvent({
  recipeId,
  action,
  session = uuidv4(),
  date = Date.now(),
}) {
  const event = new Event({ recipe: recipeId, action, session, date });
  return await event.save();
}
