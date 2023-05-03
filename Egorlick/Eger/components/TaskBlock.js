app.component('task-block', {
    props:{
      authorized: {
          type: Boolean,
          required: true
      },
      description: {
          type: String,
          required: true,
      },
      task: {
        type: String,
        required: true,
      },
      answers: {
        type: Array,
        required: true,
      },
    },
    template:
    /* HTML */
    `
    <div v-if="this.authorized" class="task-block">
      <h3> Вопрос </h3>
      <p> {{description}}</p>
      <form @submit.prevent="onSubmit">
        <p><b> {{task}}</b></p>
        <p v-for="answer in answers">
          <input name="task" type="radio" value="answer.id"> {{answer.message}} 
        </p>
        <input class="button" type="submit" value="Submit">  
      </form>
    </div>    
    `, 
  }
)