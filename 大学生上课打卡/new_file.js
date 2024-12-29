function viewDetails(courseId) {
    fetch(`/api/course/${courseId}/check-details`)
      .then(response => response.json())
      .then(data => {
            // 假设 data 包含了打卡的详细信息，如打卡时间、地点等
            const details = data.details;
            // 这里可以使用 Bootstrap 的模态框展示信息
            const modal = document.createElement('div');
            modal.className = 'modal fade';
            modal.innerHTML = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">课程 ${courseId} 打卡详情</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>打卡时间：${details.time}</p>
                            <p>打卡地点：${details.location}</p>
                            <!-- 可以添加更多信息 -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            const modalInstance = new bootstrap.Modal(modal);
            modalInstance.show();
        })
      .catch(error => {
            console.error('Error fetching details:', error);
        });
}