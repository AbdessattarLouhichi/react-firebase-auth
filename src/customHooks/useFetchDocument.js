import React from 'react'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'

function useFetchDocument(collectionName, documentId) {
    const [document, setDocument] = useState(null)

    // get doc
    const fetchDocument = async () => {
        try {
            const docRef = doc( db, collectionName, documentId )
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                const obj = {
                    id: documentId,
                    ...docSnap.data()
                }
                setDocument(obj)
            } else {
                toast.error('Document not found!')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // useffect Hook
    useEffect(() => {
      fetchDocument()
    }, [])
    

  return { document }
}

export default useFetchDocument