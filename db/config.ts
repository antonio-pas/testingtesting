import { defineDb, defineTable, column, NOW } from 'astro:db';

const Todos = defineTable({
  columns: {
    contents: column.text(),
    completed: column.boolean(),
    deadline: column.date({ default: NOW })
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Todos },
});
