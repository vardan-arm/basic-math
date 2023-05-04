import {Operation} from "../enums.ts";

interface Args {
  first: number;
  second: number;
  operation: Operation;
}

const SingleMulAndDiv = ({first, second, operation}: Args) => {
  return (<div>
    <div>{first} {operation} {second}</div>
  </div>)
}

export default SingleMulAndDiv;
