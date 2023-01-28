export default function ResultBox ({ message, loading }) {
  return (  
    <div className="border border-orange-500 p-3 rounded-lg">
       <p>{ loading ? 'Generating your message...' : message }</p>
    </div>
  )
}