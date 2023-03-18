import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'


function useFetchCollection(collectionName) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    // function de fetch collection from fireStore
    const fetchCollection = async () => {
        setLoading(true)
        try {
            //collection Ref
            const collectionNameRef = collection(db, collectionName)
            const q = await query(collectionNameRef, orderBy("createdAt"))
            // Get collection
            onSnapshot(q, (snapShot) => {
                const allData = snapShot.docs.map((item) =>({
                    id : item.id,
                    ...item.data()
                }))
                setData(allData)
                setLoading(false)
            })

        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

    // useEffect Hook
   useEffect(() => {
     fetchCollection()
   
   }, [])
   


  return { loading, data }
}

export default useFetchCollection