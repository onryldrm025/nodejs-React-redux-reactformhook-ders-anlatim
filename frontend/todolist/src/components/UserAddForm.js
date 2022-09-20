import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'
import {addUser} from '../redux/features/userSlice'
import {useSetUsersMutation} from '../redux/services/usersService'
 




const UserAddForm = ({refetch}) => {

    const dispatch =  useDispatch()

    const [addUser, result] = useSetUsersMutation()

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();

    const onSubmit = (data) => {
        addUser(data)
            .unwrap()
            .then((e)=>{
                console.log(e)
                refetch()
                reset()
            }).catch(erorr=>{
                console.log(erorr)
            })

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input  {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input type={'number'} {...register("age")} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    )
}

export default UserAddForm;