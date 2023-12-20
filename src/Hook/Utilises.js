import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import { axiospublic } from "./useAxios"
import { axiospvt } from "./UseaxiosPublic"
import axios from "axios"

export const useRole=()=>{
    const { user, loading } = useAuth()
    const email = user?.email
    const { data: Role = [], isLoading,refetch } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['role'],
        queryFn: async () => {
            const res = await axiospvt.get(`/users/${email}`)
            return res.data.role
        }
    })
    return [Role, isLoading,refetch]
}
export const Usercollection = ()=>{
    const {data: User=[],refetch}= useQuery({
        queryKey:['users'],
        queryFn: async ()=> {
            const res = await axiospvt.get('/users')
            return res.data
        }
    })
    return[User,refetch]
}
export const EmployeeCollection =()=>{
    const { user, loading } = useAuth()
    const email = user?.email
    const { data: Employee = [], isLoading,refetch } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['Payment'],
        queryFn: async () => {
            const res = await axiospublic.get(`/PaymentHistory/${email}`)
            return res.data
        }
    })
    return [Employee, isLoading,refetch]
}
export const CompareCollection =(Email)=>{
    const { data: Compare = [], } = useQuery({
        queryKey: ['compare'],
        queryFn: async () => {
            const res = await axiospublic.get(`/compare/${Email}`)
            return res.data
        }
    })
    return Compare
}

export const WorkSheet = ()=>{
    const {data: Works=[],refetch}= useQuery({
        queryKey:['users'],
        queryFn: async ()=> {
            const res = await axiospublic.get('/worksheet')
            return res.data
        }
    })
    return[Works,refetch]
}
export const TotalWork = ()=>{
    const {data: total={},refetch}= useQuery({
        queryKey:['worksheets'],
        queryFn: async ()=> {
            const res = await axios.get('http://localhost:5000/worksheets')
            return res.data
        }
    })
    return{total,refetch}
}
export const SingleWorkSheet = ()=>{
    const {user}= useAuth()
    const email = user?.email
    const {data: SingleWork=[],refetch}= useQuery({
        queryKey:['users'],
        queryFn: async ()=> {
            const res = await axiospublic.get(`/worksheet/${email}`)
            return res.data
        }
    })
    return[SingleWork,refetch]
}