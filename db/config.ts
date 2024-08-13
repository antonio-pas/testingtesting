import { defineDb, defineTable, column } from 'astro:db';

const Todos = defineTable({
  columns: {
    content: column.text(),
    completed: column.boolean(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Todos },
});
