import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// File: Model
interface Student {
  id: number;
  name: string;
  age: number;
  open: boolean;
}

// File: Data
let students: Array<Student> = [
  {
    id: 1,
    name: "Om Londhe",
    age: 17,
    open: true,
  },
  {
    id: 2,
    name: "Abhishek Paralikar",
    age: 18,
    open: false,
  },
  {
    id: 3,
    name: "Ajay Rathod",
    age: 19,
    open: false,
  },
];

// File: Controller
export const getStudents = ({ response }: { response: any }) => {
  response.body = students;
};

export const addStudents = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const student: Student = body.value;

  students.push(student);
  response.body = { studentAdded: "SUCCESS" };
  response.status = 200;
};

// File: Server
const router = new Router();
const app = new Application();
const PORT: number = 4300;

router.get("/get", getStudents).post("/register", addStudents);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 4300 });
