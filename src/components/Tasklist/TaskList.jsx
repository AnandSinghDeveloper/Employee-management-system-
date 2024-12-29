import AcceptTask from "./AcceptTask"
import CompletedTask from "./CompletedTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"


const TaskList = ({UserData}) => {
  console.log(UserData);
  
  return (
    <div id="tasklist" className="  overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 h-96 mt-10 ">
      {
        UserData.tasks.map((element ,idx)=>{
           if(element.active){
            return <AcceptTask key={idx} data={element} />
           }
           if(element.newTask){
            return <NewTask key={idx} data={element}/>
           }
           if(element.complete){
            return <CompletedTask key={idx} data={element}/>
           }
           if(element.failed){
            return <FailedTask key={idx} data={element}/>
           }

           
        })
      }
    </div>
  )
}

export default TaskList
