import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import { axiospublic } from "./useAxios"

export const useRole=()=>{
    const { user, loading } = useAuth()
    const email = user?.email
    const { data: Role = [], isLoading,refetch } = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: ['role'],
        queryFn: async () => {
            const res = await axiospublic.get(`/users/${email}`)
            return res.data.role
        }
    })
    return [Role, isLoading,refetch]
}
export const Usercollection = ()=>{
    const {data: User=[],refetch}= useQuery({
        queryKey:['users'],
        queryFn: async ()=> {
            const res = await axiospublic.get('/users')
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