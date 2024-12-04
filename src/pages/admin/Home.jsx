import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/protectedSlice'

const Home = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.protected.data)

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])


    return (
        <div>
            <ul>{data && data.map((item, index) => <li key={index}>{item.name}</li>)}</ul>
        </div>
    )
}

export default Home