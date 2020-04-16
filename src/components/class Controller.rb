class Controller


    def create_a_new_survey
        survey = Survey.create

        params[:questions].each { |q| Question.create(survey_id: survey.id)}
    end
end