import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { INote } from '../note.model';
import { NoteService } from '../service/note.service';
import { NoteDeleteDialogComponent } from '../delete/note-delete-dialog.component';

@Component({
  selector: 'jhi-note',
  templateUrl: './note.component.html',
})
export class NoteComponent implements OnInit {
  notes?: INote[];
  isLoading = false;

  constructor(protected noteService: NoteService, protected modalService: NgbModal) {}

  loadAll(): void {
    this.isLoading = true;

    this.noteService.query().subscribe(
      (res: HttpResponse<INote[]>) => {
        this.isLoading = false;
        this.notes = res.body ?? [];
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  ngOnInit(): void {
    this.loadAll();
  }

  trackId(index: number, item: INote): number {
    return item.id!;
  }

  delete(note: INote): void {
    const modalRef = this.modalService.open(NoteDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.note = note;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed.subscribe(reason => {
      if (reason === 'deleted') {
        this.loadAll();
      }
    });
  }
}
