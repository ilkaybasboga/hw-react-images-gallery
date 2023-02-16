import LessonCard from "../components/LessonCard/LessonCard"


const Lesson = ({name,image,age}) => {
  return (
    <div >
      <LessonCard  name={name} image={image} age={age}/>

    </div>
  )
}

export default Lesson
