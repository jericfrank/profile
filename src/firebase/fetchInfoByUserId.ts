import { collection, query, where, getDocs, orderBy, doc, DocumentData } from 'firebase/firestore';
import db from './db';

export interface FirestoreItem {
  id: string;
  [key: string]: any;
}

export interface WorkExperience extends FirestoreItem {
  id: string;
  company: string;
  description: string[];
  duration_text: string;
  logo_url: string;
  position: string;
}

export interface ProfileInfo {
  work_experiences: WorkExperience[];
}

const fetchInfoByUserId = async (userId: string): Promise<ProfileInfo> => {
  try {
    const userRef = doc(db, 'user', userId);

    const q = query(
      collection(db, 'work_experience'),
      where('user_id', '==', userRef),
      orderBy('created_at', 'desc')
    );

    const querySnapshot = await getDocs(q);

    const data: WorkExperience[] = querySnapshot.docs.map((doc: DocumentData) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      work_experiences: data,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchInfoByUserId;
